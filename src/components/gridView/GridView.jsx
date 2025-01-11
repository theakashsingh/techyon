import  { useState, useMemo } from 'react';
import "./index.scss"
import Card from '../Card/Card';

const GridView = ({ cardsData,stageOrder }) => {
  const [expandedStages, setExpandedStages] = useState({});

  const groupedCards = useMemo(() => {
    return cardsData.reduce((acc, card) => {
      if (!acc[card.stage]) {
        acc[card.stage] = [];
      }
      acc[card.stage].push(card);
      return acc;
    }, {});
  }, [cardsData]);

  const toggleStageExpansion = (stage) => {
    setExpandedStages(prev => ({
      ...prev,
      [stage]: !prev[stage]
    }));
  };

  const sortedStages = Object.keys(groupedCards).sort(
    (a, b) => stageOrder.indexOf(a) - stageOrder.indexOf(b)
  );

  return (
    <div className="grid-view">
      {sortedStages.map((stage) => (
        <div key={stage} className="stage-section">
          <div className="stage-header">
            <h2>{stage}</h2>
            {/* <span className="card-count">
              {groupedCards[stage].length} Projects
            </span> */}
          </div>
          
          <div className="cards-grid">
            {groupedCards[stage]
              .slice(0, expandedStages[stage] ? groupedCards[stage].length : 3)
              .map((cardData) => (
                <Card key={cardData.id} cardData={cardData} />
              ))}
          </div>
          
          {groupedCards[stage].length > 3 && (
            <button 
              className="see-more-btn"
              onClick={() => toggleStageExpansion(stage)}
            >
              {expandedStages[stage] ? 'Show Less' : 'See More'}
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default GridView;