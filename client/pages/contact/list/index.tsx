import Table from 'antd/lib/table';
import Layout from '../../../components/layout';
import useContactsList from './hooks/useContactList';

const ContactList = () => {
  const { dataSource, columns } = useContactsList();
  return (
    <Layout>
      <div>
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </Layout>
  );
};

export default ContactList;
