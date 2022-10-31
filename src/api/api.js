import { v1 as uuid } from "uuid";

const mockHttp = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getStudentScores = async () => {
  return mockHttp(1000).then(() => {
    return JSON.parse(sessionStorage.getItem("scores"));
  });
};

export const getStudentScoresByFilter = (param) => {
  const { from, to, classes } = param;
  const data = JSON.parse(sessionStorage.getItem("scores"));
  const searchResult = data.filter((record) => {
    const flagFrom =
      from === "" ? true : parseInt(record.score) >= parseInt(from);
    const flagTo = to === "" ? true : parseInt(record.score) <= parseInt(to);
    const flagClasses =
      classes.length === 0 ? true : classes.includes(record.class);
    return flagFrom && flagTo && flagClasses;
  });

  return searchResult;
};

export const createStudentScore = async (studentScore) => {
  return mockHttp(1000).then(() => {
    const data = sessionStorage.getItem("scores");
    studentScore.id = uuid();
    if (!data) {
      sessionStorage.setItem("scores", JSON.stringify([studentScore]));
    } else {
      sessionStorage.setItem(
        "scores",
        JSON.stringify([...JSON.parse(data), studentScore])
      );
    }
    return JSON.parse(sessionStorage.getItem("scores"));
  });
};

export const deleteStudentScore = async (id) => {
  return mockHttp(1000).then(() => {
    const data = JSON.parse(sessionStorage.getItem("scores"));
    const newData = data.filter((record) => record.id !== id);
    sessionStorage.setItem("scores", JSON.stringify(newData));
    return newData;
  });
};
