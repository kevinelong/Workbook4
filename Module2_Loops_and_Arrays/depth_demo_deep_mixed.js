let data = {
    title: "My Data",
    row_count: 2,
    album_list: [
        {
            name: "Deep House Mix Vol 1.",
            track_list: [
                {
                    song_title: "subconcious groove",
                    artist: "AIR"
                },
                {
                    song_title: "unusual vibes",
                    artist: "AIR"
                }
            ]
        },
        {
            name: "Deep House Mix Vol 2.",
            track_list: [
                {
                    song_title: "subconcious groove 2",
                    artist: "AIR"
                },
                {
                    song_title: "unusual vibes 2",
                    artist: "AIR"
                }
            ]
        },
    ]
};
console.log(data.album_list[1].track_list[1].song_title);
console.log(data["album_list"][1]["track_list"][1]["song_title"]);
