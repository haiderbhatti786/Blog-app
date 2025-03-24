const Menu = () => {
  const posts = [
    {
      id: 1,
      title: "hello this is the post one",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum incidunt quidem nostrum repellendus atque tenetur, possimus velit consequuntur voluptatibus laudantium, iure rem labore illum? Accusamus, excepturi debitis tempore, sint sunt quidem cupiditate modi dicta dolor tenetur quisquam dolorum delectus iusto mollitia voluptatibus voluptatem sed praesentium harum. Quo beatae iusto sed quidem fuga repellat voluptas reprehenderit perferendis sunt quae tenetur consequatur corporis, sint quos, perspiciatis unde aliquam provident dolores labore. Fuga animi illo delectus neque aut accusamus ad ducimus consectetur repudiandae eveniet nam, eos harum recusandae nemo pariatur corporis eius facilis molestiae eaque. Placeat similique deserunt neque nostrum quis, hic repellendus. ",
      img: "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      title: "hello this is the post two",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum incidunt quidem nostrum repellendus atque tenetur, possimus velit consequuntur voluptatibus laudantium, iure rem labore illum? Accusamus, excepturi debitis tempore, sint sunt quidem cupiditate modi dicta dolor tenetur quisquam dolorum delectus iusto mollitia voluptatibus voluptatem sed praesentium harum. Quo beatae iusto sed quidem fuga repellat voluptas reprehenderit perferendis sunt quae tenetur consequatur corporis, sint quos, perspiciatis unde aliquam provident dolores labore. Fuga animi illo delectus neque aut accusamus ad ducimus consectetur repudiandae eveniet nam, eos harum recusandae nemo pariatur corporis eius facilis molestiae eaque. Placeat similique deserunt neque nostrum quis, hic repellendus. ",
      img: "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      title: "hello this is the post three",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum incidunt quidem nostrum repellendus atque tenetur, possimus velit consequuntur voluptatibus laudantium, iure rem labore illum? Accusamus, excepturi debitis tempore, sint sunt quidem cupiditate modi dicta dolor tenetur quisquam dolorum delectus iusto mollitia voluptatibus voluptatem sed praesentium harum. Quo beatae iusto sed quidem fuga repellat voluptas reprehenderit perferendis sunt quae tenetur consequatur corporis, sint quos, perspiciatis unde aliquam provident dolores labore. Fuga animi illo delectus neque aut accusamus ad ducimus consectetur repudiandae eveniet nam, eos harum recusandae nemo pariatur corporis eius facilis molestiae eaque. Placeat similique deserunt neque nostrum quis, hic repellendus.",
      img: "https://images.pexels.com/photos/1324803/pexels-photo-1324803.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      title: "Post 4",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum incidunt quidem nostrum repellendus atque tenetur, possimus velit consequuntur voluptatibus laudantium, iure rem labore illum? Accusamus, excepturi debitis tempore, sint sunt quidem cupiditate modi dicta dolor tenetur quisquam dolorum delectus iusto mollitia voluptatibus voluptatem sed praesentium harum. Quo beatae iusto sed quidem fuga repellat voluptas reprehenderit perferendis sunt quae tenetur consequatur corporis, sint quos, perspiciatis unde aliquam provident dolores labore. Fuga animi illo delectus neque aut accusamus ad ducimus consectetur repudiandae eveniet nam, eos harum recusandae nemo pariatur corporis eius facilis molestiae eaque. Placeat similique deserunt neque nostrum quis, hic repellendus.",
      img: "https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt="image" />
          <h2>{post.title}</h2>
          <button>Read more</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
