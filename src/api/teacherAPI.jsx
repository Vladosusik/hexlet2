import professionImg from "/src/assets/sotrudnik1.png";
import skillsImg from "/src/assets/sotrudnik2.png";
const PROGRAM_PEOPLE = [
  {
    groupId: "professions",
    image: professionImg,
    imageAlt: "Надежда Каменская, выпускница курса Frontend-разработчик",
    caption: "Надежда Каменская, выпускница курса Frontend-разработчик",
  },
  {
    groupId: "skills",
    image: skillsImg,
    imageAlt: "Евгений Сендзюк, выпускник курсов Python и Frontend-разработчик",
    caption: "Евгений Сендзюк, выпускник курсов Python и Frontend-разработчик",
  },
];

const MOCK_GET_RESPONSES = {
  "/api/teacherAPI": PROGRAM_PEOPLE,
};

function mockRequest(url, { method = "GET" } = {}) {
  return new Promise((resolve, reject) => {
    globalThis.setTimeout(() => {
      if (method !== "GET") {
        reject(new Error(`Метод ${method} не поддерживается для ${url}`));
        return;
      }

      const data = MOCK_GET_RESPONSES[url];
      if (!data) {
        reject();
        return;
      }

      resolve({
        method,
        url,
        data: data.map((person) => ({ ...person })),
      });
    }, 1500);
  });
}

export async function getProgramPeople() {
  const response = await mockRequest("/api/teacherAPI", {
    method: "GET",
  });

  return response.data;
}