<template>
    <div class="degree">
      <table class="WorkDayTable">
        <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Grade</th>
            <th>Score</th>
        </tr>
        <tr>
            <td>HCM Essential Concepts Consulting Core</td>
            <td>7/1/2022</td>
            <td>Pass</td>
            <td>92</td>
        </tr>
        <tr>
            <td>Integration Essential Concepts Consulting Core</td>
            <td>7/29/2022</td>
            <td>Pass</td>
            <td>88</td>
        </tr>
        <tr>
            <td>Custom Integrations Consulting Core</td>
            <td>8/5/2022</td>
            <td>Pass</td>
            <td>81</td>
        </tr>
        <tr>
            <td>Workday Security and Privacy Exam</td>
            <td>8/24/2022</td>
            <td>Pass</td>
            <td>90</td>
        </tr>
        <tr>
            <td>Project Consultant - Delivery Assurance Exam</td>
            <td>8/24/2022</td>
            <td>Pass</td>
            <td>80</td>
        </tr>
        <tr>
            <td>Custom Fields: Deployment Considerations Exam</td>
            <td>8/24/2022</td>
            <td>Pass</td>
            <td>90</td>
        </tr>
        <tr>
            <td>Integration Exam 2022R2</td>
            <td>10/4/2022</td>
            <td>Pass</td>
            <td>80</td>
        </tr>
        <tr>
            <td>Security & Privacy Exam 2022R2</td>
            <td>10/11/2022</td>
            <td>Pass</td>
            <td>100</td>
        </tr>
        <tr>
            <td>Cross Functional Exam 2022R2</td>
            <td>10/11/2022</td>
            <td>Pass</td>
            <td>100</td>
        </tr>
        <tr>
            <td>Tools Exam 2022R2</td>
            <td>10/14/2022</td>
            <td>Pass</td>
            <td>100</td>
        </tr>
        <tr>
            <td>End-to-End Connector Integrations Consulting Core</td>
            <td>2/10/2023</td>
            <td>Pass</td>
            <td>97</td>
        </tr>
        <tr>
            <td>End to End Connector Integration Exam 2023R1</td>
            <td>4/7/2023</td>
            <td>Pass</td>
            <td>93</td>
        </tr>
        <tr>
            <td>Security & Privacy Exam 2023R1</td>
            <td>4/7/2023</td>
            <td>Pass</td>
            <td>90</td>
        </tr>
        <tr>
            <td>Cross Functional Exam 2023R1</td>
            <td>4/7/2023</td>
            <td>Pass</td>
            <td>100</td>
        </tr>
        <tr>
            <td>Tools Exam 2023R1</td>
            <td>4/7/2023</td>
            <td>Pass</td>
            <td>100</td>
        </tr>
        <tr>
            <td>Integration Exam 2023R1</td>
            <td>4/7/2023</td>
            <td>Pass</td>
            <td>100</td>
        </tr>

      </table><br><br><br><br>
      <div class="functionButtons">
            <router-link class="link" :to="{name: 'Certifications'}"><button class="next">BACK</button></router-link>
        </div>
    </div>
  </template>
<script>
export default {
  name: 'SideNational'
}
</script>
<style lang="scss">
  body {
    background: RGB(241, 244, 246)
  }
  table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}

th, td {
  text-align: left;
  padding: 16px;
}

tr:nth-child(even) {
  background-color: #cdcdcd;
}
  .functionButtons{
      position: fixed;
      width: 100%;
      text-align: right;
      margin-bottom: 10px;
  }
  .next{
      background-color: pink;
      width: 130px;
      height: 40px;
      margin: 10px;
      border-radius: 40px;
      border: 2px solid #ffffff;
      color: #ffffff;
      background-color: black;

      &:hover {
          color: #00afea;
          border: 2px solid #00afea;
          text-decoration: underline;
          transition: 10 ease all;
          width: 140px;
          height: 50px;
      }
  }
  .previous{
      background-color: pink;
      width: 130px;
      height: 40px;
      margin: 10px;
      border-radius: 40px;
      border: 2px solid #ffffff;
      color: #ffffff;
      background-color: black;

      &:hover {
          color: #00afea;
          border: 2px solid #00afea;
          text-decoration: underline;
          transition: 3 ease all;
          width: 140px;
          height: 50px;
      }
  }

  </style>
