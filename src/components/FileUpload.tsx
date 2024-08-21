import React from 'react';
import { Box, Button } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import Papa from 'papaparse';

interface FileUploadProps {
  onFileUpload: (parsedData: any[]) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    
    Papa.parse(file, {
      complete: (result) => {
        onFileUpload(result.data);
      },
      header: true,
    });
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxSize: 5 * 1024 * 1024, // 5MB
    accept: {
      'text/csv': ['.csv'],
    },
  });

  return (
    <Box
      {...getRootProps()}
      sx={{
        border: '2px dashed #1976d2',
        borderRadius: '8px',
        padding: '60px', // Increased padding to make the dropzone larger
        textAlign: 'center',
        backgroundColor: '#f9f9f9', // Light background color
        cursor: 'pointer',
        width: '100%', // Makes the dropzone span the full width of its container
        maxWidth: '600px', // Maximum width for the dropzone
        margin: 'auto', // Centers the dropzone horizontally
      }}
    >
      <input {...getInputProps()} />
      <p>Drag & drop a CSV file here, or click to select one</p>
      <Button variant="contained" component="span">
        Upload CSV
      </Button>
    </Box>
  );
};

export default FileUpload;
