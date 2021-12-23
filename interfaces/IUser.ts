interface iUsers {
  email: {
    type: String;
    required: true;
    unique: true;
  };
  password: {
    type: String;
    required: true;
  };
  role: {
    type: String;
    default: "User";
  };
}

export default iUsers;
