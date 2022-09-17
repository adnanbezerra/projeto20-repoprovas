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

export function createSpecificTest() {
    return {
        name: "O Criacionismo",
        pdfUrl: "https://google.com",
        category: "Projeto",
        teacher: "Diego Pinho",
        discipline: "HTML e CSS"
    }
}

export function createSpecificTestResult() {
    return [
        {
            "id": 1,
            "number": 1,
            "disciplines": [
                {
                    "id": 1,
                    "name": "HTML e CSS",
                    "termId": 1,
                    "teachersDisciplines": [
                        {
                            "tests": [
                                {
                                    "categories": {
                                        "id": 1,
                                        "name": "Projeto",
                                        "tests": [
                                            {
                                                "name": "O Criacionismo",
                                                "pdfUrl": "https://google.com",
                                                "teacherDiscipline": {
                                                    "teachers": {
                                                        "id": 1,
                                                        "name": "Diego Pinho"
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": 4,
                    "name": "Humildade",
                    "termId": 1,
                    "teachersDisciplines": [
                        {
                            "tests": []
                        }
                    ]
                }
            ]
        },
        {
            "id": 2,
            "number": 2,
            "disciplines": [
                {
                    "id": 2,
                    "name": "JavaScript",
                    "termId": 2,
                    "teachersDisciplines": [
                        {
                            "tests": []
                        }
                    ]
                },
                {
                    "id": 5,
                    "name": "Planejamento",
                    "termId": 2,
                    "teachersDisciplines": [
                        {
                            "tests": []
                        }
                    ]
                }
            ]
        },
        {
            "id": 3,
            "number": 3,
            "disciplines": [
                {
                    "id": 3,
                    "name": "React",
                    "termId": 3,
                    "teachersDisciplines": [
                        {
                            "tests": []
                        }
                    ]
                },
                {
                    "id": 6,
                    "name": "Autoconfiança",
                    "termId": 3,
                    "teachersDisciplines": [
                        {
                            "tests": []
                        }
                    ]
                }
            ]
        },
        {
            "id": 4,
            "number": 4,
            "disciplines": []
        },
        {
            "id": 5,
            "number": 5,
            "disciplines": []
        },
        {
            "id": 6,
            "number": 6,
            "disciplines": []
        }
    ];
}

export function createEmptyTestsResult() {
    return [
        {
            "id": 1,
            "number": 1,
            "disciplines": [
                {
                    "id": 1,
                    "name": "HTML e CSS",
                    "termId": 1,
                    "teachersDisciplines": [
                        {
                            "tests": []
                        }
                    ]
                },
                {
                    "id": 4,
                    "name": "Humildade",
                    "termId": 1,
                    "teachersDisciplines": [
                        {
                            "tests": []
                        }
                    ]
                }
            ]
        },
        {
            "id": 2,
            "number": 2,
            "disciplines": [
                {
                    "id": 2,
                    "name": "JavaScript",
                    "termId": 2,
                    "teachersDisciplines": [
                        {
                            "tests": []
                        }
                    ]
                },
                {
                    "id": 5,
                    "name": "Planejamento",
                    "termId": 2,
                    "teachersDisciplines": [
                        {
                            "tests": []
                        }
                    ]
                }
            ]
        },
        {
            "id": 3,
            "number": 3,
            "disciplines": [
                {
                    "id": 3,
                    "name": "React",
                    "termId": 3,
                    "teachersDisciplines": [
                        {
                            "tests": []
                        }
                    ]
                },
                {
                    "id": 6,
                    "name": "Autoconfiança",
                    "termId": 3,
                    "teachersDisciplines": [
                        {
                            "tests": []
                        }
                    ]
                }
            ]
        },
        {
            "id": 4,
            "number": 4,
            "disciplines": []
        },
        {
            "id": 5,
            "number": 5,
            "disciplines": []
        },
        {
            "id": 6,
            "number": 6,
            "disciplines": []
        }
    ];
}