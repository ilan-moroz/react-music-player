class Song {
  public url: string
  public songName: string
  public songImg: string
  public category: string
  public songInfo: string
  // public videoFile:string
  constructor(
    url: string,
    songName: string,
    songImg: string,
    category: string,
    songInfo: string,
  ) {
    this.url = url
    this.songName = songName
    this.songImg = songImg
    this.category = category
    this.songInfo = songInfo
  }
}

export default Song
