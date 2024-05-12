import { useState } from 'react';
import ViewRegOrg from './ViewRegOrg.jsx';
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