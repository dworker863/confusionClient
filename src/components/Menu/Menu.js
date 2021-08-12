import BreadcrumbComponent from 'components/common/Breadcrumb/Breadcrumb';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

import styles from './Menu.module.css';

const Menu = () => {
  const { dishes } = useSelector((state) => state);

  return (
    <div className="container">
      <BreadcrumbComponent title="Menu" />
      <div className="row">
        {dishes.map((dish) => (
          <div key={dish.id} className="col-12 col-md-5">
            <Card className="m-1 fw-normal">
              <NavLink to="/home" className={styles.link}>
                <CardImg src={dish.image} alt={dish.image} />
                <CardImgOverlay>
                  <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
              </NavLink>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
