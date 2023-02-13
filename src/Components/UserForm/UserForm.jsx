import { Typography, Row, Col, Button } from "antd";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./UserForm.css";
function UserForm() {
  const [age, setAge] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const { Title } = Typography;
  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
        }}
      >
        <Title level={3} style={{ marginTop: 0, marginBottom: 5 }}>
          User
        </Title>
        <form>
          <Row gutter={16} style={{ paddingBlock: "10px" }}>
            <Col span={12}>
              <TextField
                sx={{ width: "100%" }}
                id="outlined-basic"
                label="Name"
                variant="outlined"
              />
            </Col>
            <Col span={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Male</MenuItem>
                  <MenuItem value={20}>Female</MenuItem>
                </Select>
              </FormControl>
            </Col>
            <Col span={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Col>
          </Row>
          <Row gutter={16} style={{ paddingBlock: "10px" }}>
            <Col span={12}>
              <TextField
                sx={{ width: "100%" }}
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />
            </Col>
            <Col span={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Country</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Col>
            <Col span={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">City</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Col>
          </Row>
          <Row gutter={16} style={{ paddingBlock: "10px" }}>
            <Col span={18} style={{ position: "relative" }}>
              <input type={"file"}  />
              <TextField
                id="outlined-basic"
                label="Upload file..."
                variant="outlined"
                style={{ width: "100%",zIndex:1 }}
              />
            </Col>
            <Col span={6}>
              <Button style={{ width: "100%", height: "100%" }} type="primary">
                Upload
              </Button>
            </Col>
          </Row>
          <Row gutter={16} style={{ paddingBlock: "10px" }}>
            <Col span={24}>
              <TextField
                style={{ width: "100%" }}
                id="outlined-multiline-static"
                label="Manual Cvs Data Input"
                multiline
                rows={6}
                variant="outlined"
              />
            </Col>
          </Row>
          <Row
            gutter={16}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Col span={6}>
              <Button style={{ width: "100%", height: "50px" }} type="primary">
                Continue
              </Button>
            </Col>
          </Row>
        </form>
      </div>
    </div>
  );
}

export default UserForm;
