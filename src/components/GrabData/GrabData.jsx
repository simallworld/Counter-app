import { useQuery } from "@tanstack/react-query";

const GrabData = () => {
  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json();
  };

  const { data, isLoading, isError, isSuccess, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchData,
  });

  const colors = [
    "#FFD700", // Gold
    "#ADFF2F", // GreenYellow
    "#00BFFF", // DeepSkyBlue
    "#FF69B4", // HotPink
    "#FFA07A", // LightSalmon
    "#7B68EE", // MediumSlateBlue
    "#40E0D0", // Turquoise
    "#FF6347", // Tomato
  ];

  return (
    <>
      {isLoading && <div>Fetching data...</div>}
      {isError && <div>Error: {error.message}</div>}
      {isSuccess && (
        <div>
          <h1>Data fetched successfully</h1>
          <ul
            style={{ listStyle: "none", maxWidth: "800px", margin: "0 auto" }}
          >
            {data.map((post, index) => (
              <li
                key={post.id}
                style={{
                  backgroundColor: colors[index % colors.length],
                  padding: "1rem",
                  borderRadius: "8px",
                  marginBottom: "1rem",
                  color: "#333",
                }}
              >
                <h3 style={{ color: "none" }}>{post.title}</h3>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default GrabData;
