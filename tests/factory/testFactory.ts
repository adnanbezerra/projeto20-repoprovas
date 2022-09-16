import { faker } from '@faker-js/faker';

export function validTestFactory() {
    return {
        name: faker.random.words(3),
        pdfUrl: faker.internet.url(),
        category: "Projeto",
        teacher: "Diego Pinho",
        discipline: "HTML e CSS"
    }
}

export function invalidTeacherNameTestFactory() {
    return {
        name: faker.random.words(3),
        pdfUrl: faker.internet.url(),
        category: "Projeto",
        teacher: "Brunac",
        discipline: "HTML e CSS"
    }
}

export function invalidTeacherDisciplineTestFactory() {
    return {
        name: faker.random.words(3),
        pdfUrl: faker.internet.url(),
        category: "Projeto",
        teacher: "Bruna Hamori",
        discipline: "HTML e CSS"
    }
}