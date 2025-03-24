import postimg from "../img/image.png";
import deleteimg from "../img/delete.png";
import edit from "../img/edit.png";
import { Link } from "react-router-dom";
import Menu from "../Components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src={postimg} alt="hello" />
        <div className="user">
          <img src={postimg} alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago.</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={edit} alt="edit" />
            </Link>
            <img src={deleteimg} alt="deleteimg" />
          </div>
        </div>
        <h1>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim,
          labore.
        </h1>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          nostrum quam neque ullam excepturi deserunt fugiat iste ipsam minus
          laborum! Quam earum consequuntur quidem obcaecati a, architecto itaque
          ducimus, voluptate unde commodi nemo voluptatem, repellendus explicabo
          error consequatur hic amet! Totam suscipit nam aspernatur numquam
          magnam pariatur officiis nobis, vitae velit, similique veritatis
          molestias sed ex expedita distinctio beatae iusto possimus omnis dicta
          maxime, nisi maiores illum harum? Non est deleniti, illo, ab aperiam
          saepe laboriosam accusamus recusandae, incidunt unde optio dignissimos
          molestiae! Magni enim minus reiciendis, culpa quam, quia voluptatem
          eius dicta dolore amet aspernatur, sit possimus eum laboriosam
          suscipit maxime provident ex quod atque nihil officia corporis vero.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsum
          molestiae mollitia incidunt beatae soluta ducimus placeat perferendis
          aut debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Cumque officiis, voluptatibus ea deleniti iure eius impedit accusamus
          vel laboriosam ut nobis dolor magnam? Quis eius rem consequatur, alias
          beatae libero?
          <br />
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
          temporibus quod quam quibusdam hic ratione consequatur iusto ut
          eligendi, accusantium architecto fuga qui inventore atque expedita
          odio modi? Debitis dolor, dolores possimus magni voluptas delectus
          illum eaque architecto accusamus blanditiis!
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde eos
          repellat esse fugiat placeat ad blanditiis amet inventore voluptatem,
          tempora nostrum magnam laboriosam quibusdam molestias, ipsa sunt neque
          dignissimos quo reiciendis exercitationem, ratione eum asperiores!
          Voluptas veniam corporis
          <br />
          veritatis, rerum ut asperiores sapiente cupiditate blanditiis possimus
          similique exercitationem harum aliquid adipisci doloribus qui,
          inventore et officia maxime rem sit ex, commodi corrupti! Quibusdam
          nostrum ratione quos reiciendis?
          <br />
          Quaerat soluta neque saepe quos autem voluptate alias, magni cum
          deserunt provident accusamus, quas, iure eligendi architecto
          voluptatem? Fugit possimus officiis labore architecto.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
