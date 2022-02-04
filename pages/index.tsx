import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import GradientLayout from "../components/gradientLayout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <GradientLayout
      color="green"
      subtitle="profile"
      title="Aman Thakur"
      description="15 public playlists"
      image="https://dl.dropboxusercontent.com/s/bgiv0ssz3xpotz9/peep.png?dl=0"
      roundImage
    >
      <div>Home</div>
    </GradientLayout>
  );
};

export default Home;
