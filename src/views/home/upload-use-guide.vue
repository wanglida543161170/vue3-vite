<template>
  <div>
    <el-upload
      ref="upload"
      :file-list="fileList"
      class="upload-demo"
      action="no"
      :data="dataWithFile"
      :limit="3"
      :auto-upload="false"
    >
      <el-button class="create-btn px-2.5" size="default">选择文件</el-button>
    </el-upload>
    <el-button class="create-btn px-2.5" size="default" @click="doUpload"
      >上传文件</el-button
    >
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
const upload = ref();
const dataWithFile = {
  waterName: "黑1",
  waterType: 0,
  countyId: 1548845050627227648,
  countyName: "宝清县",
  waterArea: "20",
  plannedCompletionYear: "2023",
  mainPollutionProblem: "主要污染物问题",
  clearSituation: 0,
  administrators: [
    {
      administratorId: "1548845050627117648",
    },
    {
      administratorId: "1548845050621235648",
    },
  ],
};
const fileList = ref([]);

const doUpload = async () => {
  // 1. formdata
  // const formData = new FormData();
  // fileList.value.forEach((item) => {
  //   const file = item.raw;
  //   formData.append("file", file, file.name);
  // });
  // formData.append("args", JSON.stringify(dataWithFile));
  // axios.post("http://localhost:8080/file/img/single/json", formData);
  // 2. json
  const data = { args: dataWithFile };
  fileList.value.forEach((item) => {
    const file = item.raw;
    data.file = file;
  });
  axios.post("http://localhost:8080/file/img/single/entity", data);
};
</script>

<style lang="scss" scoped></style>
