import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Loading from "./components/UI/Loading";
import Head from "./components/Head";
import Table from "./components/Table";
import CreateRecord from "./components/CreateRecord";
import {
  getStudentScores,
  createStudentScore,
  deleteStudentScore,
  getStudentScoresByFilter,
} from "./api/api";

function App() {
  const [dataList, setDataList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const filterRef = useRef(null);
  const tableRef = useRef(null);

  useEffect(() => {
    getScore();
  }, []);

  const getScore = async () => {
    setIsLoading(true);
    const scoreData = await getStudentScores();
    setDataList(scoreData);
    setIsLoading(false);
  };

  const getScoreByFilter = async (param) => {
    setIsLoading(true);
    const scoreData = await getStudentScoresByFilter(param);
    tableRef.current?.onPageChange(null, 0);
    setDataList(scoreData);
    setIsLoading(false);
  };

  const createScore = async (params) => {
    setIsLoading(true);
    const result = await createStudentScore(params);
    filterRef.current?.clearFilter();
    setDataList(result);
    setIsLoading(false);
  };
  const deleteScore = async (id) => {
    setIsLoading(true);
    const result = await deleteStudentScore(id);
    setDataList(result);
    setIsLoading(false);
    filterRef.current?.clearFilter();
  };

  return (
    <div className="App">
      <Head />
      <Loading isLoading={isLoading} />
      <CreateRecord handleSubmit={createScore} />
      <Table
        dataList={dataList}
        onDeleteScore={deleteScore}
        tableRef={tableRef}
        filterRef={filterRef}
        getScoreByFilter={getScoreByFilter}
      />
    </div>
  );
}

export default App;
