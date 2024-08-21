import { PrismaClient } from '@prisma/client';
import { Faker, pt_BR } from '@faker-js/faker';

const prisma = new PrismaClient();

const seed = async () => {
	// deletarb todos os registros antes de começar
	await prisma.faker.deleteMany();

	// utilizar nomes brasileiros
	const faker = new Faker({ locale: [pt_BR] });

	// tornar o resultado previsível
	faker.seed(1);

	// criação do obejt "data" que será passado para o prisma cadastrar
	const data = Array.from({ length: 5 }, () => {
		const fullName = faker.person.fullName();
		const birthDate = faker.date.birthdate({ min: 14, max: 18, mode: 'age' });
		const email = faker.internet.email({ firstName: fullName });
		const password = faker.internet.password();
		const state = faker.location.state();
		const bio = faker.helpers.maybe(() => faker.lorem.text(), 0.2);
		const phone = faker.phone.number();
		const avatar = faker.helpers.maybe(() => faker.image.urlPicsumPhotos(), 0.5);
		const status = faker.helpers.arrayElement(['Online','Offiline']);
		const userName = faker.internet.userName({ firstName: fullName });
		const createdAt = faker.date.past({ years: 1 });

		return { fullName, birthDate, email, password, state, bio, phone, avatar, status, userName, createdAt };
	});

	await prisma.faker.createMany({ data, skipDuplicates: true });
    
};

seed()
	.catch((e) => {
		throw e;
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
