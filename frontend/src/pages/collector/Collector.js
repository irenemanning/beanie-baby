import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BeanieCollection from "./BeanieCollection";
import AddBeanie from "./AddBeanie";
import "../../index.css";

function Collector({ collectors, setCollectors }) {
  const [collector, setCollector] = useState({
    beanie_babies: [],
  });
  const params = useParams();
  const [showForm, setShowForm] = useState(false);
  function toggleForm() {
    setShowForm(!showForm);
  }

  useEffect(() => {
    if (collectors.length > 0) {
      let collector = collectors.find((c) => c.id == params.id);
      setCollector(collector);
    }
  }, [collectors]);

    function updateCollectors(updatedCollector) {
        const updatedCollectors = collectors.map((c) => {
            if (c.id === updatedCollector.id) {
                return updatedCollector;
            } else {
                return c;
            }
        });
        setCollectors(updatedCollectors);
    }
  
  function onDelete(deletedBeanie) {
    const updatedBeanieBabies = collector.beanie_babies.filter(
      (b) => b.id !== deletedBeanie.id
    );
    const updatedCollector = {...collector, beanie_babies: updatedBeanieBabies}
    setCollector(updatedCollector);
    updateCollectors(updatedCollector);
  }

  function updatePoem(updatedBeanieBabie) {
    const updatedBeanieBabies = collector.beanie_babies.map((beanieBaby) => {
      if (beanieBaby.id === updatedBeanieBabie.id) {
        return updatedBeanieBabie;
      } else {
        return beanieBaby;
      }
    });
    const updatedCollector = {...collector, beanie_babies: updatedBeanieBabies};
    setCollector(updatedCollector)
    updateCollectors(updatedCollector)
  }

  console.log(collector)
  let beanieBabyCollection = collector.beanie_babies.map((b) => (
    <BeanieCollection
      beanieBaby={b}
      key={b.id}
      onDelete={onDelete}
      updatePoem={updatePoem}
    />
  ));
  return (
    <div className="collector">
      <div className="add-beanie-form-toggle">
        <h2>{collector.name}'s Beanie Baby Collection</h2>
        <h5>Birthday: {collector.dob}</h5>
        <h4>Add Beanie Baby To {collector.name}'s Collection</h4>
        <button className="add-btn" onClick={toggleForm}>
          {showForm ? "▲" : "▼"}
        </button>
      </div>
      {showForm ? (
        <AddBeanie
          collector={collector}
          setCollector={setCollector}
          updateCollectors={updateCollectors}
          toggleForm={toggleForm}
        />
      ) : null}
      <div className="beanies-container">{beanieBabyCollection}</div>
    </div>
  );
}

export default Collector;
