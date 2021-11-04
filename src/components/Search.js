const Search = ({ searchEmoji }) => {
  return (
    <div className="search">
      <h1>😎 EmojiSearch 😎</h1>
      <input
        type="search"
        onChange={searchEmoji}
        placeholder="What emoji are you looking for ?"
      />
    </div>
  );
};

export default Search;
