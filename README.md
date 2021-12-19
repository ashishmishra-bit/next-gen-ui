![Logo](https://i.imgur.com/CePQwuG.png)
<hr>

# Next-Gen-UI
Next Gen Ui is a home for front-end & UI/Ux developers. We provide all the necessary components required to build a scalable front-end application which suits the user experience in a unique way. <br>
we provide :
1. <a href="https://www.npmjs.com/package/next-gen-ui">NPM</a> package support with latest updates.
2. _**HTML**_ & _**ReactJs/NextJs**_ based per-build templates which uses advance CSS Library called _**Tailwind CSS**_
3. List your UI design.
4. Developers support.

<h3>Visit Us on:</h3> 
1. Website : <a href="https://nextgenui.in/">nextgenui.in</a> <br>
2. Npm Package: <a href="https://www.npmjs.com/package/next-gen-ui">next-gen-ui</a> <br>
3. Github: <a href="https://github.com/ashishmishra-bit/next-gen-ui.git">next-gen-ui Repo</a>

<hr>

<img src="https://i.imgur.com/BAUPjcG.png" >



# Usage
<h3>Components We Provide:</h3> 

- [x] Navbars
- [x] Footers
- [x] Forms
- [x] Cards
- [x] Hero Sections
- [x] Buttons
- [x] FAQs
- [x] 404

<h3>NPM Components We Provide:</h3>

- [x] button
- [x] Form Control
- [x] Link
- [x] Login
- [x] Search
- [x] Select
- [x] Skeleton
- [x] Spinner
- [x] TextInput

<h4>NPM Usage</h4>

    $ npm i 'next-gen-ui'

<h4>Imports</h4>

<h5>1. Buttons</h5>

```javascript
import { Button } from 'next-gen-ui'

const App = () => {
    return(
        <Button>Click Me</Button>
    );
}

export default App;
```

<h5>Varients:</h5>

```javascript
<Button type="danger">Click Me</Button>
<Button type="Secondary">Click Me</Button>
<Button type="Ghost">Click Me</Button>
<Button type="Disable">Click Me</Button>
<Button Loading>Secondary Button</Button>
<Button icon={(`props`) => {}}> Download ↓ </Button>
<Button size='large | default | small'>Large</Button>
```

<h5>2. Form Control</h5>

```javascript
import { FormControl } from 'next-gen-ui'

const App = () => {
    return(
        <FormControl
            label='Email'
            htmlFor='email'
            error={
                shouldShowError
                ? 'Please type a valid email address'
                : undefined
            }
            hint="You won't be able to change it later"
            onBlur={() => setIsVisited(true) }
        >
            <TextInput
                id='email'
                width='250px'
                value={value}
                placeholder='Enter your email'
                onChange={onChange}
                error={shouldShowError}
            />
        </FormControl>
    );
}

export default App;
```

<h5>Varients:</h5>

```javascript
() => {
    return (
        <FormControl
            label='Username'
            htmlFor='username'
            hint="You can't change this field"
            disabled
        >
            <TextInput
                id='username'
                width='250px'
                value='john_doe'
                disabled
            />
        </FormControl>
    )
}
```
```javascript
() => {
    const [option, setOption] = React.useState<SelectOption | undefined>(
        selectOptions[0]
    );
    const [isVisited, setIsVisited] = React.useState(false);
    const shouldShowError = !option && isVisited;

    return (
        <FormControl
            label='Country'
            htmlFor='country'
            error={
                shouldShowError
                ? 'Required field'
                : undefined
            }
            hint="The country of residence"
            forceLabel={!!option}
            onBlur={() => setIsVisited(true) }
        >
            <Select
                id='country'
                error={shouldShowError}
                width='250px'
                placeholder='Select option'
                option={option}
                listOptions={selectOptions}
                onChange={(option) => { 
                setOption(option);
                }}
            />
        </FormControl>
    )
}
```

<h5>3. Link</h5>

```javascript
import { Link } from 'next-gen-ui'

const App = () => {
    return(
        <Link href="#">Link</Link>
    );
}

export default App;
```

<h5>Varients:</h5>

```javascript
<Link as="span" href="#">I am span</Link>
<Link disabled href="#">
```

<h5>4. Login</h5>

```javascript
import { Login } from 'next-gen-ui'

const App = () => {
    return(
        <Login onSubmit={() => {}} />
    );
}

export default App;
```

<h5>5. Search</h5>

```javascript
import { Search } from 'next-gen-ui'

const App = () => {
    const [value, setValue] = useState('');
    return(
        <Search
            placeholder='Search the site'
            width='400px'
            value={value}
            onChange={e => setValue(e.currentTarget.value)}
        />
    );
}

export default App;
```

<h5>6. Select</h5>

```javascript
import { Select } from 'next-gen-ui'

const App = () => {
    const [option, setOption] = useState<SelectOption | undefined>(listOptions[1]);
    return(
       <Select
            width='250px'
            placeholder='Select option'
            option={option}
            listOptions={listOptions}
            onChange={(option) => { 
            setOption(option);
            }}
        />
    );
}

export default App;
```

<h5>Varients:</h5>

```javascript
iska samjh nahi aaya likh lena 
```

<h5>7. Skeleton</h5>

```javascript
import { Skeleton } from 'next-gen-ui'

const App = () => {
    return(
       <Skeleton
            height={150}
            width={150}
        />
    );
}

export default App;
```

<h5>Varients:</h5>

```javascript
<Skeleton
  borderRadius="50%" //for rounded skeleton
  height={150}
  width={150}
/>
```

<h5>8. Spinner</h5>

```javascript
import { Spinner } from 'next-gen-ui'

const App = () => {
    return(
       <Spinner size={50} />
    );
}

export default App;
```

<h5>Varients:</h5>

```javascript
() => (
  <DarkBackground>
    <Spinner size={50} light />
  </DarkBackground>
)
```

<h5>8. Text Input</h5>

```javascript
import { TextInput } from 'next-gen-ui'

const App = () => {
    return(
       <TextInput width="250px" />
    );
}

export default App;
```

<h5>Varients:</h5>

```javascript
<TextInput placeholder="Placeholder" width="250px" />

<TextInput  error  placeholder="Wrong input" width="250px"/>

<TextInput disabled placeholder="Disabled" width="250px" />

<TextInput placeholder="Not editable" readonly width="250px" />
//with icon
<TextInput
    icon={() => {}}
    placeholder="Login"  width="250px"
/>
//Clearable
() => {
  const [value, setValue] = useState('');
  return (
    <TextInput
      placeholder='Type and clear'
      width='250px'
      value={value}
      onChange={e => setValue(e.currentTarget.value)}
      clearable
    />
  );
}
//Size
() => {
  return (
    <>
      <Row>
        <TextInput placeholder='large' size='large' />
        <TextInput placeholder='default' size='default' />
        <TextInput placeholder='small' size='small' />
      </Row>
    </>
  );
}

```

# License

<a href="https://choosealicense.com/licenses/mit/">**MIT License**</a><br>

**Copyright (c) 2021 Next Gen UI Developers.**

Permission is hereby granted, at affordable cost, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

### Tech & Tools:
##### Front-end:
<div class="row">
<img src="https://img.shields.io/badge/HTML-orange?style=for-the-badge&logo=html5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<img src="https://img.shields.io/badge/Tailwind CSS-white?style=for-the-badge&logo=tailwindcss&logoColor=" />
<img src="https://img.shields.io/badge/React.Js-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/Nextjs-white?style=for-the-badge&logo=react&logoColor=61DAFB" />
</div>

##### Back-end:
<div class="row">
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" /> 
<img src="https://img.shields.io/badge/TypeScript-1572B6?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/tsdx-white?style=for-the-badge&logo=typescript&logoColor=" />
<img src="https://img.shields.io/badge/Storybook-white?style=for-the-badge&logo=storybook&logoColor=" />
<img src="https://img.shields.io/badge/mdx-black?style=for-the-badge&logo=markdown&logoColor=yellow" />

</div>

##### Design:
<div class="row">
<img src="https://img.shields.io/badge/Figma-red?style=for-the-badge&logo=figma&logoColor=white" />
<img src="https://img.shields.io/badge/illustrator-cyan?style=for-the-badge&logo=adobe&logoColor=white" />

</div>

##### DataBase:
<div class="row">
<img src="https://img.shields.io/badge/Firebase-yellow?style=for-the-badge&logo=firebase&logoColor=white" />

</div>

##### Version Control:
<div class="row">
<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />

</div>

##### Deployment:
<div class="row">

<img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" />
<img src="https://img.shields.io/badge/Vercel-black?style=for-the-badge&logo=vercel&logoColor=white" />
</div>

##### Package:
<div class="row">

<img src="https://img.shields.io/badge/npm-white?style=for-the-badge&logo=npm&logoColor=white" />
</div>

# Developers

<img align="left" width="100" height="100" src="https://i.imgur.com/k7o3oFU.png/100/100">

<div>Ashish Kumar Mishra</div><br>
<a href="https://www.linkedin.com/in/ashishmishra2002/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="ashishmishra" height="30" width="50" /></a>
<a href="https://github.com/ashishmishra-bit" target="blank"><img align="center" src="https://patrickstofner.com/src/github.png" alt="ashishmishra" height="40" width="40" /></a>&nbsp&nbsp
<a href="https://ashish.pages.dev" target="blank"><img align="center" src="https://www.freepnglogos.com/uploads/logo-website-png/logo-website-website-icon-with-png-and-vector-format-for-unlimited-22.png" alt="ashishmishra" height="40" width="40" /></a>
<br>
<br>
<br>
<img align="left" width="100" height="100" src="https://i.imgur.com/QrxYwym.png/100/100">

<div>Ankit Raj</div><br>
<a href="https://www.linkedin.com/in/ankit-raj-a3405b1b0" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="ashishmishra" height="30" width="50" /></a>
<a href="https://www.github.com/AnkitRajCode" target="blank"><img align="center" src="https://patrickstofner.com/src/github.png" alt="ashishmishra" height="40" width="40" /></a>&nbsp&nbsp
<a href="https://ankitraj.pages.dev" target="blank"><img align="center" src="https://www.freepnglogos.com/uploads/logo-website-png/logo-website-website-icon-with-png-and-vector-format-for-unlimited-22.png" alt="ashishmishra" height="40" width="40" /></a>
<br>
<br>
<br>
<img align="left" width="100" height="100" src="http://www.fillmurray.com/100/100">

<div>Om Prakash</div><br>
<a href="https://www.linkedin.com/in/ashishmishra2002/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="ashishmishra" height="30" width="50" /></a>
<a href="https://www.linkedin.com/in/ashishmishra2002/" target="blank"><img align="center" src="https://patrickstofner.com/src/github.png" alt="ashishmishra" height="40" width="40" /></a>&nbsp&nbsp
<a href="https://www.linkedin.com/in/ashishmishra2002/" target="blank"><img align="center" src="https://www.freepnglogos.com/uploads/logo-website-png/logo-website-website-icon-with-png-and-vector-format-for-unlimited-22.png" alt="ashishmishra" height="40" width="40" /></a>
<br>
<br>
<br>
<img align="left" width="100" height="100" src="https://imgur.com/PMUzRgL.png/100/100">

<div>Shivam Sinha</div><br>
<a href="https://www.linkedin.com/in/ashishmishra2002/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="ashishmishra" height="30" width="50" /></a>
<a href="https://www.linkedin.com/in/ashishmishra2002/" target="blank"><img align="center" src="https://patrickstofner.com/src/github.png" alt="ashishmishra" height="40" width="40" /></a>&nbsp&nbsp
<a href="https://www.linkedin.com/in/ashishmishra2002/" target="blank"><img align="center" src="https://www.freepnglogos.com/uploads/logo-website-png/logo-website-website-icon-with-png-and-vector-format-for-unlimited-22.png" alt="ashishmishra" height="40" width="40" /></a>
<br>
<br>
<br>
<img align="left" width="100" height="100" src="http://www.fillmurray.com/100/100">

<div>Shubham Singh</div><br>
<a href="https://www.linkedin.com/in/ashishmishra2002/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="ashishmishra" height="30" width="50" /></a>
<a href="https://www.linkedin.com/in/ashishmishra2002/" target="blank"><img align="center" src="https://patrickstofner.com/src/github.png" alt="ashishmishra" height="40" width="40" /></a>&nbsp&nbsp
<a href="https://www.linkedin.com/in/ashishmishra2002/" target="blank"><img align="center" src="https://www.freepnglogos.com/uploads/logo-website-png/logo-website-website-icon-with-png-and-vector-format-for-unlimited-22.png" alt="ashishmishra" height="40" width="40" /></a>

<br>
<br>
