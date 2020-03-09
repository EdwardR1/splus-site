import React from "react";


const Divider = () => (
  <span style={{ fontWeight: "bold", color: "#f79646", fontFamily: "Corbel" }}> &nbsp;&nbsp;|&nbsp;&nbsp;</span>
);

const Text = ({ children }) => (
  <span style={{ fontWeight: "300", color: "#606060", fontFamily: "Corbel" }}>{children}</span>
);


const getYear = () => {
  let date = new Date();
  return date.getFullYear();
}
const Footer = () => (
  <div
    className="text-center footer"
    style={{ display: "flex", flexDirection: "column", paddingTop: 10, paddingBottom: 10, fontFamily: "Corbel", position: 'fixed', bottom: 0, left: 0, width: "100%", backgroundColor: "white" }}
  >
    <div>
      <span style={{ color: "#606060", fontWeight: "bold", fontFamily: "Corbel" }}>S Plus</span>{" "}
      <span style={{ color: "#bfbfbf", fontFamily: "Corbel" }}>Group Limited</span>
    </div>
    <div>
      <Text>copyright {getYear()}</Text>
      <Divider />
      <Text>all rights reserved</Text>
      <Divider />
      <Text>terms and conditions</Text>
    </div>
  </div>
);

export { Footer };
