import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { Button } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { FaDownload } from 'react-icons/fa6';

import { getFile } from '../../api/serverApi';
import { messages } from '../../utils/constants';

const ExportExcelButton = ({ data }) => {
  const {
    data: fileData,
    isLoading,
    isFetching,
    isError,
    error,
    refetch,
  } = useQuery(['excel', data], () => getFile(data), {
    keepPreviousData: false,
    enabled: false,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (isFetching) {
      try {
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(fileData);
        link.download = 'exported_data.xlsx';
        link.click();
      } catch (error) {
        console.error('Error exporting Excel from React:', error);
        toast.error(messages.upload.downloadError, {
          progress: undefined,
        });
      }
    }
  }, [isFetching]);

  const handleExportExcel = async () => {
    refetch();
  };

  return (
    <Button
      type="link"
      disabled={isFetching}
      loading={isFetching}
      icon={<FaDownload />}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        outline: 0,
        border: 0,
        color: 'purple',
        fontWeight: 'bold',
        textAlign: 'center',
      }}
      onClick={handleExportExcel}
    >
      EXPORT
    </Button>
  );
};

export default ExportExcelButton;
