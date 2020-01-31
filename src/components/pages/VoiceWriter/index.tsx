import React from 'react'
import PageMain from '../../common/PageMain'
import PermissionAPI from '../../common/PermissionAPI'
import PermissionNFC from '../../common/PermissionNFC'
import PermissionMicrophone from '../../common/PermissionMicrophone'
import PageCenter from '../../common/PageCenter'
import PageTitle from '../../common/PageTitle'
import NFCWriteIcon from '../../common/NFCWriteIcon'
import CountDown from '../../common/CountDown'
import PageBounceIcon from '../../common/PageBounceIcon'
import IconMicrophone from '../../common/icons/IconMicrophone'
import PageHooks from './PageHooks'
// ______________________________________________________
//
const Page: React.FC = () => {
  const hooks = PageHooks()
  return (
    <>
      <PageCenter>
        {hooks.mode === 'ready' && (
          <PageBounceIcon onClick={hooks.handleClickIcon}>
            <IconMicrophone />
          </PageBounceIcon>
        )}
        {hooks.mode === 'countdown' && <CountDown />}
        {hooks.mode === 'recording' && (
          <PageBounceIcon onClick={hooks.handleClickIcon}>
            <IconMicrophone />
          </PageBounceIcon>
        )}
        {hooks.mode === 'writing' && <NFCWriteIcon />}
      </PageCenter>
      <PageTitle text={hooks.message} />
    </>
  )
}
// ______________________________________________________
//
const Container: React.FC = () => (
  <PageMain backgroundColor="marine">
    <PermissionAPI>
      <PermissionNFC>
        <PermissionMicrophone>
          <Page />
        </PermissionMicrophone>
      </PermissionNFC>
    </PermissionAPI>
  </PageMain>
)
// ______________________________________________________
//
export default Container
