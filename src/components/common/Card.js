import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from 'reactstrap';

const CardComponent = ({ size, img, name, description, designation }) => {
  return (
    <Card>
      <CardImg width={size} src={`/${img}`} alt={name} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        {designation && <CardSubtitle>{designation}</CardSubtitle>}
        <CardText>{description}</CardText>
      </CardBody>
    </Card>
  );
};

export default CardComponent;
