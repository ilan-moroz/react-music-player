class Song {
  public id: number | undefined
  public url: string
  public songName: string
  public songImg: string
  public category: number
  public songInfo: string
  public videoFile: string
  constructor(
    url: string,
    songName: string,
    songImg: string,
    category: number,
    songInfo: string,
    videoFile: string,
  ) {
    this.url = url
    this.songName = songName
    this.songImg = songImg
    this.category = category
    this.songInfo = songInfo
    this.videoFile = videoFile
  }
}

export default Song
