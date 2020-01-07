import React from 'react';
import axios from 'axios';
import { BrowserView, MobileView } from 'react-device-detect';
import { Icon, Segment, Button } from 'semantic-ui-react';
import { toast } from 'react-semantic-toasts';

import { jsonHeaders } from '../../constants/formPostRequestHeaders'
import { urlCmsIntegration, urlIITRMain, urlCms } from '../../urls';

import style from '../../styles.css';

const TOAST_TIME = 0

class CMSIntegration extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      loading: {
        preview: false,
        publish: false
      }
    }
  }
  onPreview = () => {
    this.setState({
      loading:{
        ... this.state.loading,
        preview: true
      }
    });
    axios({
      method: 'POST',
      url: urlCmsIntegration(),
      data: JSON.stringify({'action': 'preview'}),
      headers: jsonHeaders
    })
      .then(response => {
        const data = response.data;
        const url = data.url;
        const description = (
          <p>
            Click on this{' '}
            <a href={url} target="_blank" styleName="style.toastLink">
              link
            </a>{' '}
            to preview your profile page.
          </p>  
        )
        toast({
          title: 'Preview Profile Page',
          icon: 'print',
          description: description,
          time: TOAST_TIME
        });
      })
      .catch(error => {
        const description = (
          <p>
            Some error has occurred.
            Try previewing your page after some time!
          </p>
        )
        toast({
          type: 'error',
          title: 'Preview Error',
          icon: 'print',
          description: description,
          time: TOAST_TIME
        });
      })
      .finally(code => {
        this.setState({
          loading:{
            ... this.state.loading,
            preview: false
          }
        });       
      });
  }

  onPublish = () => {
    this.setState({
      loading:{
        ... this.state.loading,
        publish: true
      }
    });
    axios({
      method: 'POST',
      url: urlCmsIntegration(),
      data: JSON.stringify({'action':'publish'}),
      headers: jsonHeaders
    })
      .then(response => {
        let data = response.data;
        const url = data.url;
        const description = (
          <p>
            Your page will be published at this{' '}
            <a href={url} target="_blank" styleName="style.toastLink">
              link
            </a>.
            <br/>
            Wait some time for content to update.
          </p>
        )
        toast({
          title: 'Publish Profile Page',
          icon: 'upload',
          description: description,
          time: TOAST_TIME
        });
        return 'success';
      })
      .catch(error => {
        console.log(error)
        const description = (
          <p>
            Some error has occurred.
            Try previewing your page after some time!
          </p>
        )
        toast({
          type: 'error',
          title: 'Publish Error',
          icon: 'upload',
          description: description,
          time: TOAST_TIME
        });
        return 'error';
      })
      .finally(code =>{
        this.setState({
          loading:{
            ... this.state.loading,
            publish: false
          }
        });
      });
  }

  render() {
    const { theme } = this.props;
    const previewLoad = this.state.loading.preview;
    const publishLoad = this.state.loading.publish;
    return (   
      <div>
        <BrowserView>
          <Segment
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}
          >
                <Button onClick={this.onPreview} icon color={theme} loading={previewLoad}>
                  <Icon name="print" />
                  Preview
                </Button>
                <Button onClick={this.onPublish} icon color={theme} loading={publishLoad}>
                <Icon name="upload" />
                Publish
              </Button>
          </Segment>
        </BrowserView>
        <MobileView>
          <Segment
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}
          >
                <Button onClick={this.onPreview} icon color={theme} loading={previewLoad}>
                  <Icon name="print" />
                  Preview
                </Button>

              <Button onClick={this.onPublish} icon color={theme} loading={publishLoad}>
                <Icon name="upload" />
                Publish
              </Button>
          </Segment>
        </MobileView>
      </div>
    );
  }
}

export default CMSIntegration
