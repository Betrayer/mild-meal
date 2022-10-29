import { useNavigate } from 'react-router-dom';
import './navigateButtons.scss';

const NavigateButtons = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="button-back-wrapper">
        <span className="button-back" onClick={() => navigate(-1)}>
          BACK
        </span>
        <span className="button-home" onClick={() => navigate("/")}>
          HOME
        </span>
      </section>
    </>
  );
}

export default NavigateButtons;
