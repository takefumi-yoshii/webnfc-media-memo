import React from 'react'
import PageMain from '../../common/PageMain'
import PermissionAPI from '../../common/PermissionAPI'
import PermissionNFC from '../../common/PermissionNFC'
import RequireInteraction from '../../common/RequireInteraction'
import PageCenter from '../../common/PageCenter'
import PageTitle from '../../common/PageTitle'
import NFCReadIcon from '../../common/NFCReadIcon'
import PageBounceIcon from '../../common/PageBounceIcon'
import IconSpeaker from '../../common/icons/IconSpeaker'
import PageHooks from './PageHooks'
// ______________________________________________________
//
const Page: React.FC = () => {
  const hooks = PageHooks()
  return (
    <>
      <PageCenter>
        <audio
          ref={hooks.audioRef}
          onPlay={hooks.handlePlay}
          onEnded={hooks.handleEnded}
        />
        {!hooks.isPlaying && <NFCReadIcon />}
        {hooks.isPlaying && (
          <PageBounceIcon>
            <IconSpeaker />
          </PageBounceIcon>
        )}
      </PageCenter>
      <PageTitle text={hooks.message} />
    </>
  )
}
// ______________________________________________________
//
const Container: React.FC = () => (
  <PageMain backgroundColor="water">
    <PermissionAPI>
      <PermissionNFC>
        <RequireInteraction>
          <Page />
        </RequireInteraction>
      </PermissionNFC>
    </PermissionAPI>
  </PageMain>
)
// ______________________________________________________
//
export default Container
