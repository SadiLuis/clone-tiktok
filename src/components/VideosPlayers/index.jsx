import { useRef, useState } from 'react'
import styles from './styles.module.css'
import clsx from 'clsx'

const SRC_URL = 'https://v16-webapp.tiktok.com/8b96325dd4b7e53600fcac7769e02962/62be2e10/video/tos/useast2a/tos-useast2a-pve-0068/0e2b8632231941a599de3439e2d85346/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=3272&bt=1636&btag=80000&cs=0&ds=3&ft=eXd.6HmzMyq8Z-_Z7we2NEleyl7Gb&mime_type=video_mp4&qs=0&rc=ODQ8NjhpOWllO2hpPGc1OEBpM2tpbGc6ZnNnZDMzNzczM0AzMi5jYV8wNmMxMjE2LV9fYSNxbWRzcjRfcHBgLS1kMTZzcw%3D%3D&l=20220630171244010189066023222A53EE'

export default function VideoPlayer () {
  const [isPlaying, setIsPlaying] = useState(false)
  const video = useRef(null)

  const handlePlay = () => {
    isPlaying
      ? video.current.pause()
      : video.current.play()

    setIsPlaying(!isPlaying)
  }

  const playerClassname = clsx(styles.player, {
    [styles.hidden]: !isPlaying
  })

  return (
    <div>
      <video
        className={styles.video}
        src={SRC_URL}
        controls={false}
        ref={video}
        onClick={handlePlay}
      />
      <i className={playerClassname} onClick={handlePlay} />
    </div>
  )
}
