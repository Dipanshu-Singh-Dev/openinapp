import styles from "./styles.module.css";
import Navbar from '../Navbar/Index.jsx'
import UploadForm from "../UploadForm/Index.jsx"
import { upload } from "../../components/SVG";
const Index = () => {
  return (
    <div id={styles.container}>
      <Navbar />
      <UploadForm />
      
    </div>
  );
}

export default Index