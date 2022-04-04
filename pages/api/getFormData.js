const FORM_DATA_USER = [
  {
    id: 0,
    type: "text",
    name: "Username",
    label: "user Name",
    placeholder: "type user name",
    value: "User",
  },
  {
    id: 1,
    type: "checkbox",
    name: "Employed",
    label: "Employment status",
    placeholder: "",
    checked: "checked",
    value: true,
  },
  {
    id: 2,
    type: "radio",
    name: "Job ready",
    label: "Job Ready",
    placeholder: "select Job ready status",
    checked: true,
    value: true,
  },
  {
    id: 3,
    type: "text",
    name: "About",
    label: "About",
    placeholder: "type something about your self",
    value: "none",
  },
  {
    id: 4,
    type: "text",
    name: "Avatar",
    label: "Avatar URL",
    placeholder: "type your avatar url",
    value: "http://url/avatar",
  },
];
export default function handler(req, res) {
  res.status(200).json(JSON.stringify(FORM_DATA_USER));
}
