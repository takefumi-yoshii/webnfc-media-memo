declare global {
  interface Window {
    NDEFReader: any
    NDEFWriter: any
    MediaRecorder: MediaRecorder
    chooseFileSystemEntries: any
  }
  type RecordingState = 'inactive' | 'recording' | 'paused'
  class MediaRecorder {
    constructor(stream: MediaStream, options?: MediaRecorderOptions)
    pause: Function
    requestData: Function
    resume: () => void
    start: Function
    stop: Function
    ondataavailable: Function
    onerror: Function
    onpause: Function
    onresume: Function
    onstart: Function
    onstop: Function
    state: RecordingState
  }
  interface MediaRecorderOptions {
    mimeType?: string
    audioBitsPerSecond?: number
    videoBitsPerSecond?: number
    bitsPerSecond?: number
  }
  interface NDEFScanOptions {
    id?: string
    recordType?: string
    mediaType?: string
    signal?: any
  }
  interface NDEFReader {
    scan: (options?: NDEFScanOptions) => Promise<any>
    onerror: (error: any) => void
    onreading: (event: NDEFReadingEvent) => void
  }
  interface NDEFWriter {
    write: (message: NDEFMEssage) => Promise<any>
  }
  interface NDEFMEssage {
    records: (NDEFRecord | NDEFRecordInput)[]
  }
  interface NDEFReadingEvent extends Event {
    serialNumber: string
    message: NDEFMEssage
  }
  interface NDEFRecord {
    recordType: string
    mediaType?: string
    id?: string
    data?: ArrayBufferView | ArrayBuffer
    encoding?: string
    lang?: string
    toRecords?: Function
  }
  interface NDEFRecordInput {
    recordType: string
    mediaType?: string
    id?: string
    data?: string
    encoding?: string
    lang?: string
    toRecords?: Function
  }
  // type PermissionName = "geolocation" | "notifications" | "push" | "midi" | "camera" | "microphone" | "speaker" | "device-info" | "background-sync" | "bluetooth" | "persistent-storage" | "ambient-light-sensor" | "accelerometer" | "gyroscope" | "magnetometer" | "clipboard"
  interface NDEFPermissionDescriptor {
    name: 'nfc'
  }
  type PermissionsDescriptor =
    | PermissionDescriptor
    | DevicePermissionDescriptor
    | MidiPermissionDescriptor
    | PushPermissionDescriptor
    | NDEFPermissionDescriptor
}

export type FIXME_any = any
