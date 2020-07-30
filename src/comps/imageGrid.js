import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");
  console.log({ docs });

  const DeletePicture = (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('src')
  }
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          
          <motion.div
            className="img-wrap"
            ket={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt="Picture"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
          
        ))}
    </div>
  );
};

export default ImageGrid;
