import React from 'react'
import PageMain from '../../common/PageMain'
import PermissionAPI from '../../common/PermissionAPI'
import PermissionNFC from '../../common/PermissionNFC'
import PermissionMicrophone from '../../common/PermissionMicrophone'
import PermissionCamera from '../../common/PermissionCamera'
import PageCenter from '../../common/PageCenter'
import PageTitle from '../../common/PageTitle'
import NFCWriteIcon from '../../common/NFCWriteIcon'
import CountDown from '../../common/CountDown'
import PageBounceIcon from '../../common/PageBounceIcon'
import IconMovie from '../../common/icons/IconMovie'
import PageHooks from './PageHooks'
// ______________________________________________________
//
const Page: React.FC = () => {
  const hooks = PageHooks()
  return (
    <>
      <PageCenter onClick={hooks.handleClickCenter}>
        {hooks.isShowVideo && <video ref={hooks.videoRef} />}
        {hooks.mode === 'ready' && (
          <PageBounceIcon>
            <IconMovie />
          </PageBounceIcon>
        )}
        {hooks.mode === 'countdown' && <CountDown />}
        {hooks.mode === 'writing' && <NFCWriteIcon />}
      </PageCenter>
      <PageTitle text={hooks.message} />
    </>
  )
}
// ______________________________________________________
//
const Container: React.FC = () => (
  <PageMain backgroundColor="raspbery">
    <PermissionAPI>
      <PermissionNFC>
        <PermissionMicrophone>
          <PermissionCamera>
            <Page />
          </PermissionCamera>
        </PermissionMicrophone>
      </PermissionNFC>
    </PermissionAPI>
  </PageMain>
)
// ______________________________________________________
//
export default Container
