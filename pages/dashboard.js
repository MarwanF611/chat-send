import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { useEffect, userEffect, useState } from "react";

export default function dashboard() {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);
  //see if user is logged
  const getData = async () => {
    if (loading) return;
    if (!user) return route.push("/auth/login");
  };

  //get users data
  useEffect(() => {
    getData();
  }, [user, loading]);

  return (
    <div>
      <h1>Your Posts</h1>
      <div>posts</div>
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  );
}
