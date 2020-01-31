export function joinRecordsMessage(message: NDEFMEssage) {
  if (message.records.length === 0) return ''
  return message.records
    .map(r => {
      const record = r as NDEFRecord
      switch (record.recordType) {
        case 'text':
          const textDecoder = new TextDecoder(record.encoding)
          if (!record.data) return ''
          return textDecoder.decode(record.data)
        case 'url':
          const decoder = new TextDecoder()
          return decoder.decode(record.data)
        default:
          return ''
      }
    })
    .join(', ')
}
