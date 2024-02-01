import styles from "./styles.module.css";
import Navbar from '../Navbar/Index.jsx'
import UploadForm from "../UploadForm/Index.jsx"
import { upload } from "../../components/SVG";
import Table from "../Table/Table.jsx";
const Index = () => {
  
  return (
    <div id={styles.container}>
      <Navbar />
      <UploadForm />
      <Table/>
    </div>
  );
}

export default Index