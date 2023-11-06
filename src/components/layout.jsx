import Head from "next/head";
import PropTypes from "prop-types";
import { Breadcrumbs } from "./breadcrumbs.jsx";
import { Container } from "./container.jsx";
import { Grid } from "./grid.jsx";
import { Wrapper } from "./wrapper.jsx";
import { Title } from "./title.jsx";

export const Layout = ({ children, breadcrumbs, title }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <main>
      <Wrapper>
        <Container>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <Grid>
            <Title text={title} />
            {children}
          </Grid>
        </Container>
      </Wrapper>
    </main>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  breadcrumbs: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
};
