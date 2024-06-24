import { useState } from "react";
import Button from "./ui/button";
import TextField from "./ui/text-field";
import { gql, useMutation } from "@apollo/client";

const CREATE_USER = gql`
  mutation CreateUserMutation($input: UserInputField!) {
    createUser(input: $input) {
      username
      id
    }
  }
`;

const User = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    console.log(name);
    setUser({
      ...user,
      [name]: value,
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const { data } = await createUser({
        variables: {
          input: {
            username: user.username,
            password: user.password,
          },
        },
      });

      console.log("successfully created the user", data);
      setUser({ username: "", password: "" }); // Reset form fields after successful submission
    } catch (err) {
      console.log("error creating the user", err);
    }
  }

  return (
    <main className="p-4 w-screen grid place-items-center h-[90%] rounded-md">
      <div
        className="flex w-1/4 p-4 h-[40vh] items-center justify-center border-2 border-slate-900 rounded-md"
        style={{ boxShadow: "2px 0px 4px rgba(0,0,0,.02)" }}
      >
        <div className="flex-col h-full justify-between  w-full">
          <h1 className="text-2xl font-semibold mb-2">Create User</h1>
          <form onSubmit={handleSubmit}>
            <TextField
              onChange={handleChange}
              className="mb-4 h-12 mt-8"
              name="username"
              value={user.username}
              type="text"
            />
            <TextField
              onChange={handleChange}
              value={user.password}
              className="mb-4 h-12"
              name="password"
              type="password"
            />
            <Button className="mt-4" text="register" />
          </form>
        </div>
      </div>
      {data && (
        <div>
          <p>Successfully created user:</p>
          <p>Username: {data.createUser.username}</p>
          <p>ID: {data.createUser.id}</p>
          <p>Password: {data.createUser.password}</p>
        </div>
      )}
    </main>
  );
};
export default User;
