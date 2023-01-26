export const execString = `
  word = (2 + 2) * 3
`;

let a = {
  type: 'TK_MODULE',
  childs: [
    {
      type: 'TK_DECLARE',
      childs: [
        { type: 'TK_TYPE_FUNCTION', data: 'function' },
        { type: 'TK_IDENTIFIER', data: 'gui' },
        {
          type: 'TK_MODULE',
          childs: [
            {
              type: 'TK_DECLARE',
              childs: [
                { type: 'TK_TYPE_CONTROL', data: 'control' },
                { type: 'TK_IDENTIFIER', data: 'a' },
                {
                  type: 'TK_ASSIGN',
                  data: '=',
                  childs: [
                    {
                      type: 'TK_IDENTIFIER',
                      data: 'frm',
                      childs: [
                        {
                          type: 'TK_CALL',
                          childs: [
                            { type: 'TK_IDENTIFIER', data: 'get' },
                            {
                              type: 'TK_VAR_LIST',
                              childs: [{ type: 'TK_STATIC_STRING' }],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: 'TK_DECLARE',
              childs: [
                { type: 'TK_TYPE_CONTROL', data: 'control' },
                { type: 'TK_IDENTIFIER', data: 'b' },
                {
                  type: 'TK_ASSIGN',
                  data: '=',
                  childs: [
                    {
                      type: 'TK_IDENTIFIER',
                      data: 'frm',
                      childs: [
                        {
                          type: 'TK_CALL',
                          childs: [
                            { type: 'TK_IDENTIFIER', data: 'get' },
                            {
                              type: 'TK_VAR_LIST',
                              childs: [
                                { type: 'TK_STATIC_STRING', data: 'alias1' },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: 'TK_IF',
              data: 'if',
              childs: [
                {
                  type: 'TK_EQ',
                  data: '==',
                  childs: [
                    {
                      type: 'TK_IDENTIFIER',
                      data: 'a',
                      childs: [{ type: 'TK_IDENTIFIER', data: 'value' }],
                    },
                    { type: 'TK_STATIC_STRING', data: 'oiuoiu' },
                  ],
                },
                {
                  type: 'TK_MODULE',
                  childs: [
                    {
                      type: 'TK_ASSIGN',
                      data: '=',
                      childs: [
                        {
                          type: 'TK_IDENTIFIER',
                          data: 'b',
                          childs: [{ type: 'TK_IDENTIFIER', data: 'enable' }],
                        },
                        { type: 'TK_STATIC_INT', data: '1' },
                      ],
                    },
                  ],
                },
                {
                  type: 'TK_MODULE',
                  childs: [
                    {
                      type: 'TK_ASSIGN',
                      data: '=',
                      childs: [
                        {
                          type: 'TK_IDENTIFIER',
                          data: 'c',
                          childs: [{ type: 'TK_IDENTIFIER', data: 'enable' }],
                        },
                        { type: 'TK_STATIC_INT', data: '0' },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'TK_VAR_LIST',
          childs: [
            {
              type: 'TK_DECLARE',
              childs: [
                { type: 'TK_TYPE_FORM', data: 'form' },
                { type: 'TK_IDENTIFIER', data: 'frm' },
              ],
            },
          ],
        },
      ],
    },
  ],
};

let b = {
  type: 'TK_MODULE',
  childs: [
    {
      type: 'TK_DECLARE',
      childs: [
        { type: 'TK_TYPE_FUNCTION', data: 'function' },
        { type: 'TK_IDENTIFIER', data: 'gui' },
        {
          type: 'TK_BLOCK',
          childs: [
            {
              type: 'TK_DECLARE',
              childs: [
                { type: 'TK_TYPE_CONTROL', data: 'control' },
                { type: 'TK_IDENTIFIER', data: 'a' },
                {
                  type: 'TK_ASSIGN',
                  data: '=',
                  childs: [
                    {
                      type: 'TK_IDENTIFIER',
                      data: 'frm',
                      childs: [
                        {
                          type: 'TK_CALL',
                          childs: [
                            { type: 'TK_IDENTIFIER', data: 'get' },
                            {
                              type: 'TK_VAR_LIST',
                              childs: [{ type: 'TK_STATIC_STRING' }],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: 'TK_DECLARE',
              childs: [
                { type: 'TK_TYPE_CONTROL', data: 'control' },
                { type: 'TK_IDENTIFIER', data: 'b' },
                {
                  type: 'TK_ASSIGN',
                  data: '=',
                  childs: [
                    {
                      type: 'TK_IDENTIFIER',
                      data: 'frm',
                      childs: [
                        {
                          type: 'TK_CALL',
                          childs: [
                            { type: 'TK_IDENTIFIER', data: 'get' },
                            {
                              type: 'TK_VAR_LIST',
                              childs: [
                                { type: 'TK_STATIC_STRING', data: 'alias1' },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: 'TK_IF',
              data: 'if',
              childs: [
                {
                  type: 'TK_EQ',
                  data: '==',
                  childs: [
                    {
                      type: 'TK_IDENTIFIER',
                      data: 'a',
                      childs: [{ type: 'TK_IDENTIFIER', data: 'value' }],
                    },
                    { type: 'TK_STATIC_STRING', data: 'oiuoiu' },
                  ],
                },
                {
                  type: 'TK_BLOCK',
                  childs: [
                    {
                      type: 'TK_ASSIGN',
                      data: '=',
                      childs: [
                        {
                          type: 'TK_IDENTIFIER',
                          data: 'b',
                          childs: [{ type: 'TK_IDENTIFIER', data: 'enable' }],
                        },
                        { type: 'TK_STATIC_INT', data: '1' },
                      ],
                    },
                  ],
                },
                {
                  type: 'TK_ELSE',
                  data: 'else',
                  childs: [
                    {
                      type: 'TK_BLOCK',
                      childs: [
                        {
                          type: 'TK_ASSIGN',
                          data: '=',
                          childs: [
                            {
                              type: 'TK_IDENTIFIER',
                              data: 'b',
                              childs: [
                                { type: 'TK_IDENTIFIER', data: 'enable' },
                              ],
                            },
                            { type: 'TK_STATIC_INT', data: '2' },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'TK_VAR_LIST',
          childs: [
            {
              type: 'TK_DECLARE',
              childs: [
                { type: 'TK_TYPE_FORM', data: 'form' },
                { type: 'TK_IDENTIFIER', data: 'frm' },
              ],
            },
          ],
        },
      ],
    },
  ],
};
