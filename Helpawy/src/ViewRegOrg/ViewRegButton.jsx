import React, { useState } from 'react';
import ViewRegOrg from 'C:/Users/Seif/Documents/GitHub/El-m4t4teen/Helpawy/src/ViewRegOrg/ViewRegOrg.jsx';
const ViewRegButton = () => {
  const [showList, setShowList] = useState(false);

  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <div>
<button onClick={toggleList}>Show Organizations</button>
{showList && <ViewRegOrg />}
</div>
);
};

export default ViewRegButton;