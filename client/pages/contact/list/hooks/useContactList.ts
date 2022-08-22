
const useContactsList = () => { 
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
      mobile: '+44 1234567890',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
      mobile: '+44 1234567',
    },
  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Mobile',
      dataIndex: 'mobile',
      key: 'mobile',
    },
  ];
  return {
    dataSource,
    columns,
  }
}

export default useContactsList;