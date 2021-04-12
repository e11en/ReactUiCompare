import { useState } from "react";
import styled from "styled-components";
import {
  Cascader,
  Select,
  Slider,
  Switch,
  Radio,
  Checkbox,
  DatePicker,
  TimePicker,
  Input as AntdInput,
  Rate,
  Transfer,
  TreeSelect,
} from "antd";

import "antd/dist/antd.css";

import Code from "components/CodeComponent";
import ElementCard, {
  SpacedChildren as SpacedChildrenBase,
} from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";
import Info from "components/InfoComponent";

const SpacedChildren = styled(SpacedChildrenBase)`
  && {
    margin-bottom: 2em;
  }
`;

const Fields = () => {
  return (
    <ElementCard title="Fields">
      <SpacedChildren>
        <AntdInput defaultValue="Standard" />
        <AntdInput defaultValue="Disabled" disabled />
        <AntdInput
          addonBefore="http://"
          addonAfter=".com"
          defaultValue="Adornment addon"
        />
        <AntdInput prefix="http://" suffix=".com" defaultValue="Adornments" />
        <AntdInput.Search defaultValue="Search" />
        <AntdInput.Password placeholder="Password" />
        <AntdInput.TextArea showCount maxLength={100} />
      </SpacedChildren>
      <Code>
        {`
          <Input defaultValue="Standard" />
          <Input defaultValue="Disabled" disabled />
          <Input defaultValue="Adornments addon"
            addonBefore="http://"
            addonAfter=".com"
          />
          <Input defaultValue="Adornments" prefix="http://" suffix=".com" />
          <Input.Search defaultValue="Search" />
          <Input.Password placeholder="Password" />
          <Input.TextArea showCount maxLength={100} />
        `}
      </Code>
    </ElementCard>
  );
};

const CheckBoxes = () => {
  return (
    <ElementCard title="CheckBoxes">
      <div>
        <Info>
          Indeterminate option can only be set with individual checkboxes.
        </Info>
        <Checkbox.Group
          options={[
            { label: "Selected", value: "1" },
            { label: "Disabled", value: "2", disabled: true },
            { label: "Active", value: "4" },
          ]}
          defaultValue={["1"]}
        />
        <Checkbox indeterminate={true}>Indeterminate</Checkbox>
      </div>
      <Code>
        {`
          <Checkbox.Group
            options={[
              { label: "Selected", value: "1" },
              { label: "Disabled", value: "2", disabled: true },
              { label: "Active", value: "4" },
            ]}
            defaultValue={["1"]}
          />
          <Checkbox indeterminate={true}>Indeterminate</Checkbox>
        `}
      </Code>
    </ElementCard>
  );
};

const DateTimePickers = () => {
  return (
    <ElementCard title="Date time pickers">
      <SpacedChildren>
        <DatePicker />
        <DatePicker picker="week" />
        <DatePicker picker="month" />
        <DatePicker picker="quarter" />
        <DatePicker picker="year" />
        <DatePicker.RangePicker />
        <DatePicker showTime placeholder="Select date and time" />
        <TimePicker />
      </SpacedChildren>
      <Code>
        {`
          <DatePicker />
          <DatePicker picker="week" />
          <DatePicker picker="month" />
          <DatePicker picker="quarter" />
          <DatePicker picker="year" />
          <RangePicker />
          <DatePicker showTime placeholder="Select date and time" />
          <TimePicker />
        `}
      </Code>
    </ElementCard>
  );
};

const Radios = () => {
  const [value, setValue] = useState(1);

  return (
    <ElementCard title="Radios">
      <div>
        <Radio.Group value={value} onChange={(e) => setValue(e.target.value)}>
          <Radio value={1}>Selected</Radio>
          <Radio value={2} disabled>
            Disabled
          </Radio>
          <Radio value={3}>Active</Radio>
        </Radio.Group>
      </div>
      <Code>
        {`
          const [value, setValue] = useState(1);
          
          <Radio.Group value={value} onChange={(e) => setValue(e.target.value)}>
            <Radio value={1}>Selected</Radio>
            <Radio value={2} disabled>Disabled</Radio>
            <Radio value={3}>Active</Radio>
          </Radio.Group>
        `}
      </Code>
    </ElementCard>
  );
};

const Selects = () => {
  const options = [
    {
      value: "1",
      label: "Item 1",
      children: [
        {
          value: "1.1",
          label: "Item 1.1",
        },
      ],
    },
    {
      value: "2",
      label: "Item 2",
      children: [
        {
          value: "2.1",
          label: "Item 2.1",
        },
      ],
    },
    {
      value: "3",
      label: "Item 3",
      disabled: true,
    },
  ];

  return (
    <ElementCard title="Select">
      <SpacedChildren>
        <Cascader options={options} placeholder="Please select" />
        <Select defaultValue="1">
          <Select.Option Option value="1">
            Item 1
          </Select.Option>
          <Select.Option value="2">Item 2</Select.Option>
          <Select.Option value="3" disabled>
            Item 3
          </Select.Option>
        </Select>
        <Select defaultValue={["1", "2"]} mode="multiple" allowClear>
          <Select.Option value="1">Item 1</Select.Option>
          <Select.Option value="2">Item 2</Select.Option>
          <Select.Option value="3" disabled>
            Item 3
          </Select.Option>
        </Select>
        <TreeSelect
          placeholder="Please select"
          showSearch
          allowClear
          treeDefaultExpandAll
        >
          <TreeSelect.TreeNode value="1" title="Item 1">
            <TreeSelect.TreeNode value="1.1" title="Item 1.1" />
          </TreeSelect.TreeNode>
          <TreeSelect.TreeNode value="2" title="Item 2">
            <TreeSelect.TreeNode value="2.1" title="Item 2.1" />
          </TreeSelect.TreeNode>
        </TreeSelect>
      </SpacedChildren>
      <Code>
        {`
          <Cascader placeholder="Please select" 
            options={[
              {value: "1", label: "Item 1", children: [{value: "1.1", label: "Item 1.1"}]},
              {value: "2", label: "Item 2", children: [{value: "2.1", label: "Item 2.1"}]},
              {value: "3", label: "Item 3" disabled: true},
            ]}
          />

          <Select defaultValue="1">
            <Select.Option value="1">Item 1</Select.Option>
            <Select.Option value="2">Item 2</Select.Option>
            <Select.Option value="3" disabled>
              Item 3
            </Select.Option>
          </Select>

          <Select defaultValue={["1", "2"]} mode="multiple" allowClear>
            <Select.Option value="1">Item 1</Select.Option>
            <Select.Option value="2">Item 2</Select.Option>
            <Select.Option value="3" disabled>
              Item 3
            </Select.Option>
          </Select>

          <TreeSelect
            placeholder="Please select"
            showSearch
            allowClear
            treeDefaultExpandAll
          >
            <TreeSelect.TreeNode value="1" title="Item 1">
              <TreeSelect.TreeNode value="1.1" title="Item 1.1" />
            </TreeSelect.TreeNode>
            <TreeSelect.TreeNode value="2" title="Item 2">
              <TreeSelect.TreeNode value="2.1" title="Item 2.1" />
            </TreeSelect.TreeNode>
          </TreeSelect>
        `}
      </Code>
    </ElementCard>
  );
};

const Sliders = () => {
  return (
    <ElementCard title="Sliders">
      <div>
        <Slider marks={{ 50: "50%" }} defaultValue={10} />
        <Slider range defaultValue={[10, 50]} />
      </div>
      <Code>
        {`
          <Slider marks={{ 50: "50%" }} defaultValue={10} />
          <Slider range defaultValue={[10, 50]} />
        `}
      </Code>
    </ElementCard>
  );
};

const Switches = () => {
  return (
    <ElementCard title="Switches">
      <SpacedChildren>
        <Switch defaultChecked />
        <Switch disabled />
        <Switch size="small" />
        <Switch checkedChildren="Y" unCheckedChildren="N" />
      </SpacedChildren>
      <Code>
        {`
          <Switch defaultChecked />
          <Switch size="small" />
          <Switch disabled />
          <Switch checkedChildren="Y" unCheckedChildren="N" />
        `}
      </Code>
    </ElementCard>
  );
};

const Rates = () => {
  return (
    <ElementCard title="Rate">
      <div>
        <Rate allowHalf defaultValue={2.5} />
      </div>
      <Code>
        {`
          <Rate allowHalf defaultValue={2.5} />
        `}
      </Code>
    </ElementCard>
  );
};

const Transfers = () => {
  return (
    <ElementCard title="Transfer">
      <div>
        <Transfer
          dataSource={[
            { title: "Item 1", key: "item1" },
            { title: "Item 2", key: "item2" },
          ]}
          titles={["Source", "Target"]}
          render={(item) => item.title}
          pagination
        />
      </div>
      <Code>
        {`
          <Transfer
            dataSource={[
              { title: "Item 1", key: "item1" },
              { title: "Item 2", key: "item2" },
            ]}
            titles={["Source", "Target"]}
            render={(item) => item.title}
            pagination
          />
        `}
      </Code>
    </ElementCard>
  );
};

export const Input = () => {
  return (
    <FlexWrapper>
      <Fields />
      <CheckBoxes />
      <DateTimePickers />
      <Radios />
      <Selects />
      <Sliders />
      <Switches />
      <Rates />
      <Transfers />
    </FlexWrapper>
  );
};
