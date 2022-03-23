import Layout from 'components/layout';
import type { NextPage } from 'next';

import Hero from 'components/home/Hero';
import CustomerBase from 'components/home/CustomerBase';
import Why from 'components/home/Why';
import How from 'components/home/How';

const Home: NextPage = (): JSX.Element => {
	return (
		<Layout title="Patara Exchange">
			<Hero />
			<CustomerBase />
			<Why />
			<How />
		</Layout>
	)
};

export default Home;
