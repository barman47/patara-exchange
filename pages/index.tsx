import Layout from 'components/layout';
import type { NextPage } from 'next';

import Hero from 'components/home/Hero';
import CustomerBase from 'components/home/CustomerBase';
import Why from 'components/home/Why';
import WhoWeAre from 'components/home/WhoWeAre';
import How from 'components/home/How';
import Map from 'components/home/Map';

const Home: NextPage = (): JSX.Element => {
	return (
		<Layout title="Patara Exchange">
			<Hero />
			<CustomerBase />
			<Why />
			<WhoWeAre />
			<How />
			<Map />
		</Layout>
	)
};

export default Home;
