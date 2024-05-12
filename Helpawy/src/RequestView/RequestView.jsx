import { useState } from 'react';
// import './OrganizationView.css';

const RequestView = () => {
  const [items, setItems] = useState([
    { name: "T-Shirt", type: "Clothing" },
    { name: "Pants", type: "Clothing" },
    { name: "Shoes", type: "Clothing" },
    { name: "Pencil", type: "Stationery" },
    { name: "Calculator", type: "Stationery" },
    { name: "Lego bricks", type: "Toys" }
  ]);
  const [showItems, setShowItems] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('');

  const toggleItems = () => {
    setShowItems(!showItems);
  };

  // State to track which item's information is being downloaded
  const [downloadedItem, setDownloadedItem] = useState(null);

  // Function to handle download button click
  const handleDownload = (item) => {
    setDownloadedItem(item.name);
    setItems(items.filter(i => i !== item)); // Remove the item from the list
  };

  // Filter the items based on the search query and filter criteria
  const filteredItems = items.filter(item => {
    return item.name.toLowerCase().includes(searchQuery.toLowerCase()) && (filter === '' || item.type.toLowerCase().startsWith(filter.toLowerCase()));
  });

  return (
    <>
    <div>
      <div>
      <button onClick={toggleItems}>Show Requests</button>
      </div>
      {showItems && (
        <div>
          <h2>Current Requests</h2>
          <input
            type="text"
            placeholder="Search items"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">All</option>
            <option value="C">Clothing</option>
            <option value="S">Stationery</option>
            <option value="T">Toys</option>
          </select>
          <ul>
            {filteredItems.map((item, index) => (
              <li key={index}>
                {item.name}
                <button onClick={() => handleDownload(item)}>Confirm Request</button> 
                {downloadedItem === item.name && <span>Done</span>} {/* Print 'Done' if this item was downloaded */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </>
  );
};

export default RequestView;