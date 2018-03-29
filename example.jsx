/*eslint off*/
import xian, {xianVarA, XianVarB, CONSTANT, default as d} from 'xian-class';

var a = 'a';
let b = 1,
  c = [0,
    {1: true, 2: 'false', '3': !(a === b)},
    '4', TRUE, false, null, undefined];
const delete = {key: this, 'reserved': true};
const E = readWriteVariable;
const fullVar = new E();
const g = {
  h: 'i',
  j: (k) ? l : m;
  n: {
    object: 'object',
    o: {
      p: 'q',
    }
  }
};
const r = /regExp\(^[a-zA-Z0-9]+\)\.\([a-z]+\+\/)++/;
const s = {
  t: g.object,
}

//------------------------------------------------------------------------------

if (a == b && (c != a || b !== E)) {
  let tempVar = 'okay';
}

if (typeof delete === 'object')
  a = 'reassigned';

////////////////////////////////////////////////////////////////////////////////

function regular(a, b) {
  return a + b;
}

const variableAssignment = function() {
  return true;
}

const fatArrow = (params) => {
  params.toString();
  return true;
}

/*******************************************************************************
 <div attr="" />
*/

// @todo: this.
// @TODO: that.
class xianClass extends React.Component {
  /**
   * Javascript Docs
   * @param {[type]} props [description]
   * @return {<ReactComponent>} duh.
   */
  constructor(props) {
    super(props);

    this.state = {
      rendered: true,
    };
  }

  get something() {
    return 'something';
  }

  doCustomSomething() {
    this.setState({
      value: g.n.o.p,
    });
  }

  componentDidMount() {
    for (let i = 0, i <= 10, i++) {
      console.log('looping' + i);

      if (i === 10)
        break;
    }

    this.props.array.forEach((item) => item++);
  }

  render() {
    return (
      <div attribute="someAttribute">
        <XianVarB attribute={true} secondAttribute={'false'} />
        <XianVarB.property
          attribute="0"
          secondAttribute={props.array[0]}
          thirdAttribute={props.object[someVar]['property'].true}
        />
        <XianVarB attribute={`interpolated-string-${xian} was here`}>
          <img src="" alt="" />
        </XianVarB>
      </div>
    );
  }
}

const fatArrowShorthand = (params) => {
  return (
    <div attribute="someAttribute">
      <XianVarB attribute={true} secondAttribute={'false'} />
      <XianVarB.property
        attribute="0"
        secondAttribute={props.array[0]}
        thirdAttribute={props.object[someVar]['property'].true}
      />
      <XianVarB attribute={`interpolated-string-${'xian' + variable} was here`}>
        <img src="" alt="" />
      </XianVarB>
    </div>
  );
};

const notNested = (params) => {
  return <XianVarB />
}

module.exports = {
  a: a + b,
  c,
};

export delete;
export this;
export E;
export default fullVar;
