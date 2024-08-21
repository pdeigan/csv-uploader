import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import DataTable from './components/DataTable';
import { Container, Button, Box } from '@mui/material';

const App: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  const handleFileUpload = (parsedData: any[]) => {
    setData(parsedData);
  };

  const handleReset = () => {
    setData([]);
  };

  return (
    <Container>
      {data.length === 0 ? (
        <FileUpload onFileUpload={handleFileUpload} />
      ) : (
        <Box>
          <Button variant="contained" color="secondary" onClick={handleReset}>
            Reset
          </Button>
          <DataTable data={data} />
        </Box>
      )}
    </Container>
  );
};

export default App;
